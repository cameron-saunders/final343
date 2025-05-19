import Link from 'next/link'

export default function Menubar() {
    return (
      <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <a href='https://expense-six-livid.vercel.app' target='_blank'>Midterm Part I - Expense</a>
        </li>
        <li>
          <a href='https://ophth-website-jxcx.vercel.app' target='_blank'>Midterm Part II - Site</a>
        </li>
      </ul>
      
        </>
    );
  }