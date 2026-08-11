"use client"

// Picks a friendly American English voice, preferring softer/younger-sounding ones.
function pickVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null
  const voices = window.speechSynthesis.getVoices()
  if (!voices.length) return null

  const enUS = voices.filter((v) => v.lang === "en-US" || v.lang.startsWith("en-US"))
  const pool = enUS.length ? enUS : voices.filter((v) => v.lang.startsWith("en"))

  // Prefer voices that tend to sound higher/softer (closer to a kid voice).
  const preferred = ["samantha", "victoria", "kids", "junior", "female", "google us english", "zira"]
  for (const name of preferred) {
    const match = pool.find((v) => v.name.toLowerCase().includes(name))
    if (match) return match
  }
  return pool[0] ?? voices[0] ?? null
}

// Warm up the voice list (voices load asynchronously in most browsers).
export function primeVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return
  window.speechSynthesis.getVoices()
}

function makeUtterance(text: string, rate: number): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = "en-US"
  u.rate = rate // slower = easier for kids to learn
  u.pitch = 1.5 // higher pitch to sound more like a cheerful kid voice
  u.volume = 1
  const voice = pickVoice()
  if (voice) u.voice = voice
  return u
}

export type SpeakOptions = {
  onStart?: () => void
  onEnd?: () => void
}

/**
 * Speaks a car brand name for learning:
 * 1) each syllable slowly, one at a time
 * 2) then the full word
 */
export function speakCar(syllables: string[], fullWord: string, opts: SpeakOptions = {}) {
  if (typeof window === "undefined" || !window.speechSynthesis) return
  const synth = window.speechSynthesis

  // Stop anything currently playing so taps feel responsive.
  synth.cancel()

  opts.onStart?.()

  syllables.forEach((syllable) => {
    synth.speak(makeUtterance(syllable, 0.5))
  })

  // Full word a touch faster than the syllables, but still slow.
  const full = makeUtterance(fullWord, 0.7)
  full.onend = () => opts.onEnd?.()
  full.onerror = () => opts.onEnd?.()
  synth.speak(full)
}

export function stopSpeaking() {
  if (typeof window === "undefined" || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
}
