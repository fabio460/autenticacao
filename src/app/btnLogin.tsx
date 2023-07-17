"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function BtnLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Usuario {session?.user?.name} logado <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Não esta logado <br />
      <button onClick={() => signIn()}>Logar</button>
    </>
  )
}