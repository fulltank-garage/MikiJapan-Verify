# MikiJapan Verify

หน้า Verify สำหรับแสดงสถานะรอตรวจสอบข้อมูลผ่าน LIFF และปิดหน้าต่างอัตโนมัติเมื่อร้านอนุมัติสมาชิกแล้ว

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS ผ่าน `@tailwindcss/vite`
- LINE LIFF SDK

## Environment

```bash
VITE_API_BASE_URL=https://mikijapan-api-production-7e32.up.railway.app/api
VITE_LIFF_ID=2010003223-1GN7XrfD
VITE_PROFILE_LIFF_ID=2010003223-KfDmnya6
```

## Run

Use Node.js 24.x.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

เมื่อเปิดผ่าน LINE LIFF หน้านี้จะเช็ค `/auth/registration-status` ทุก 10 วินาที และเรียก `liff.closeWindow()` เมื่อสถานะเป็น `approved`
