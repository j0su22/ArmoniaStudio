import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { nombre, email, telefono, servicio, mensaje } = req.body ?? {}

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos requeridos' })
  }

  try {
    await resend.emails.send({
      from: 'Armonía Estudio <noreply@armoniastudio.com>',
      to: 'cortezaguilar020@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto: ${servicio || 'Sin especificar'}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#2B2B2B;border-bottom:2px solid #8C947E;padding-bottom:8px;">
            Nuevo mensaje desde armoniastudio.com
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Nombre</strong></td><td style="padding:8px 0;">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Teléfono</strong></td><td style="padding:8px 0;">${telefono || 'No proporcionado'}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Servicio</strong></td><td style="padding:8px 0;">${servicio || 'No especificado'}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#F6F3EF;border-left:3px solid #8C947E;">
            <strong style="color:#2B2B2B;">Mensaje:</strong>
            <p style="margin:8px 0 0;color:#5C5752;line-height:1.6;">${mensaje}</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Error al enviar el mensaje' })
  }
}
