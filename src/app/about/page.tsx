import { redirect } from 'next/navigation'

// Redirect to home page since About content is currently disabled
export default function About() {
    redirect('/')
}
