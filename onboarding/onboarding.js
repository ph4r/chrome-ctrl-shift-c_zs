'use strict';

const stepWelcome = document.getElementById('step-welcome');
const stepShortcut = document.getElementById('step-shortcut');
const stepDone = document.getElementById('step-done');

const btnGetStarted = document.getElementById('btn-get-started');
const btnConfirm = document.getElementById('btn-confirm-shortcut');
const btnUseDefault = document.getElementById('btn-use-default');
const btnStartUsing = document.getElementById('btn-start-using');
const recorderDisplay = document.getElementById('recorder-display');
const recorderHint = document.getElementById('recorder-hint');
const finalLabel = document.getElementById('final-shortcut-label');
const dots = document.querySelectorAll('.onboarding__dot');

let capturedShortcut = null;
let recordHandler = null;

// Guard: if already onboarded, close tab
chrome.storage.local.get(['onboarded'], (result) => {
  if (result.onboarded === true) {
    window.close();
  }
});

// --- Step navigation ---

function goToStep(stepNumber) {
  [stepWelcome, stepShortcut, stepDone].forEach((s) =>
    s.classList.remove('onboarding__step--active')
  );

  dots.forEach((dot, i) => {
    dot.classList.remove('onboarding__dot--active', 'onboarding__dot--completed');
    if (i + 1 < stepNumber) dot.classList.add('onboarding__dot--completed');
    if (i + 1 === stepNumber) dot.classList.add('onboarding__dot--active');
  });

  const target = [stepWelcome, stepShortcut, stepDone][stepNumber - 1];
  requestAnimationFrame(() => {
    target.classList.add('onboarding__step--active');
  });

  if (stepNumber === 2) startListening();
  if (stepNumber === 3) stopListening();
}

// --- Shortcut recording ---

function startListening() {
  recorderDisplay.textContent = 'Press a key combo\u2026';
  recorderDisplay.classList.remove('onboarding__recorder-display--captured');
  btnConfirm.disabled = true;
  capturedShortcut = null;

  recordHandler = createRecordHandler({
    onModifiersOnly(text) {
      recorderDisplay.textContent = text;
    },
    onNoModifier() {
      recorderDisplay.textContent = 'Add a modifier (Ctrl, Shift, Alt)';
      recorderHint.textContent = 'You need at least one modifier key';
    },
    onCapture(shortcut, displayText) {
      capturedShortcut = shortcut;
      recorderDisplay.textContent = displayText;
      recorderDisplay.classList.add('onboarding__recorder-display--captured');
      btnConfirm.disabled = false;
      recorderHint.textContent = 'Press a different combo to change, or confirm below';
    }
  });

  document.addEventListener('keydown', recordHandler);
}

function stopListening() {
  if (recordHandler) {
    document.removeEventListener('keydown', recordHandler);
    recordHandler = null;
  }
}

// --- Save and complete ---

function saveShortcutAndProceed(shortcut) {
  chrome.storage.local.set({ shortcut });
  finalLabel.textContent = formatShortcut(shortcut);
  goToStep(3);
}

function completeOnboarding() {
  chrome.storage.local.set({ onboarded: true }, () => {
    window.close();
  });
}

// --- Button handlers ---

btnGetStarted.addEventListener('click', () => goToStep(2));

btnConfirm.addEventListener('click', () => {
  if (capturedShortcut) saveShortcutAndProceed(capturedShortcut);
});

btnUseDefault.addEventListener('click', () => {
  saveShortcutAndProceed(DEFAULT_SHORTCUT);
});

btnStartUsing.addEventListener('click', completeOnboarding);
