import { NavLink } from "react-router-dom"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "disabled" | "anchor"
  iconSrc?: string
  onClick?: () => void
  to?: string
  href?: string
}

export default function Button({
  children,
  variant = "primary",
  iconSrc,
  onClick,
  to,
  href,
}: ButtonProps) {
  const buttonVariants: Record<string, string> = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    disabled: "btn btn-disabled",
    anchor: "anchor",
  }

  const content = (
    <>
      {iconSrc && <img src={iconSrc} alt="icon" className="inline-block mr-2" />}
      {children}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants[variant]}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          isActive
            ? `${buttonVariants[variant]} active-anchor` // classe extra quando ativo
            : buttonVariants[variant]
        }
      >
        {content}
      </NavLink>
    )
  }

  return (
    <button
      className={buttonVariants[variant]}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      {content}
    </button>
  )
}
