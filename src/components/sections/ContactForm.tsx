import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Укажите имя';
    if (!form.phone.trim()) next.phone = 'Укажите телефон';
    if (form.phone && !/^[\d\s+\-()]{7,20}$/.test(form.phone)) next.phone = 'Проверьте формат телефона';
    if (!consent) next.consent = 'Необходимо согласие на обработку данных';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState('loading');
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

    // TODO: replace with real endpoint
    if (!endpoint) {
      await new Promise((r) => setTimeout(r, 600));
      setState('error');
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="bg-panel border border-line rounded-2xl p-8">
        <p className="text-lg font-semibold mb-2">Заявка отправлена</p>
        <p className="text-muted text-base">Свяжемся с вами в рабочее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-panel border border-line rounded-2xl p-8 space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">Имя</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          disabled={state === 'loading'}
          aria-invalid={!!errors.name}
          className="w-full bg-bg border border-line rounded-lg px-3 py-2 text-base text-text focus:outline-none focus:border-accent disabled:opacity-60"
        />
        {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Телефон</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          disabled={state === 'loading'}
          aria-invalid={!!errors.phone}
          className="w-full bg-bg border border-line rounded-lg px-3 py-2 text-base text-text focus:outline-none focus:border-accent disabled:opacity-60"
        />
        {errors.phone && <p className="text-sm text-red-400 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">Компания</label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          disabled={state === 'loading'}
          className="w-full bg-bg border border-line rounded-lg px-3 py-2 text-base text-text focus:outline-none focus:border-accent disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">Задача</label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          disabled={state === 'loading'}
          className="w-full bg-bg border border-line rounded-lg px-3 py-2 text-base text-text focus:outline-none focus:border-accent disabled:opacity-60 resize-y"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          disabled={state === 'loading'}
          className="mt-1 accent-[var(--accent)]"
          aria-invalid={!!errors.consent}
        />
        <label htmlFor="consent" className="text-sm text-muted">
          Я согласен на обработку персональных данных в соответствии с{' '}
          <a href="#/privacy" className="text-accent underline">
            политикой конфиденциальности
          </a>
        </label>
      </div>
      {errors.consent && <p className="text-sm text-red-400">{errors.consent}</p>}

      {state === 'error' && (
        <p className="text-sm text-red-400">
          Отправка временно недоступна. Позвоните по телефону +7 (3952) 43-67-23.
        </p>
      )}

      <Button href="" type="submit" disabled={state === 'loading'} icon={false} className="w-full">
        {state === 'loading' ? 'Отправка…' : 'Отправить заявку'}
      </Button>
    </form>
  );
}