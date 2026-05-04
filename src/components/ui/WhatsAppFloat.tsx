import { motion } from 'framer-motion'

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/50300000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-50 w-13 h-13 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: '#25D366' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.74 3.048 9.368L1.052 31.02l5.83-1.87A15.94 15.94 0 0016.004 32C24.828 32 32 24.822 32 16S24.828 0 16.004 0zm9.28 22.594c-.384 1.082-1.91 1.98-3.126 2.244-.834.178-1.922.32-5.588-1.202-4.694-1.932-7.716-6.694-7.946-7.004-.222-.31-1.868-2.49-1.868-4.748 0-2.258 1.18-3.364 1.598-3.79.384-.392.834-.49 1.112-.49.277 0 .554.002.798.014.256.012.598-.098.936.714.35.834 1.188 2.892 1.29 3.102.102.21.17.456.034.732-.136.278-.204.45-.404.694-.2.244-.42.546-.6.732-.2.208-.408.432-.176.848.232.416.036 1.384 1.736 2.982 1.374 1.272 2.534 1.766 3.264 2.164 1.07.58 1.67.484 2.288-.294.784-.994 1.58-1.878 1.58-1.878s.83-.94 2.288-.94c.402 0 .808.09 1.18.284 1.37.766 2.67 1.528 2.67 1.528s.412.234.476.564c.064.334.064 1.064-.32 2.146z" />
      </svg>
    </motion.a>
  )
}
