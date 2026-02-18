import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Shrew — The Universal Deep Learning Bridge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #080808 0%, #1a1a2e 50%, #080808 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "system-ui, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        display: "flex",
                    }}
                />

                {/* Glow */}
                <div
                    style={{
                        position: "absolute",
                        width: 400,
                        height: 400,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        display: "flex",
                    }}
                />

                {/* Logo placeholder */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 800,
                        color: "white",
                        letterSpacing: "-2px",
                        marginBottom: 16,
                        display: "flex",
                    }}
                >
                    🐒 Shrew
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 32,
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.85)",
                        marginBottom: 12,
                        display: "flex",
                    }}
                >
                    The Universal Deep Learning Bridge
                </div>

                {/* Description */}
                <div
                    style={{
                        fontSize: 18,
                        color: "rgba(255,255,255,0.5)",
                        maxWidth: 700,
                        textAlign: "center",
                        lineHeight: 1.5,
                        display: "flex",
                    }}
                >
                    Define once in .sw — train and deploy from Python, Rust, JS, C++, or WASM
                </div>

                {/* Language pills */}
                <div
                    style={{
                        display: "flex",
                        gap: 12,
                        marginTop: 32,
                    }}
                >
                    {["Python", "Rust", "C/C++", "JavaScript", "WASM"].map((lang) => (
                        <div
                            key={lang}
                            style={{
                                padding: "8px 20px",
                                borderRadius: 999,
                                border: "1px solid rgba(255,255,255,0.15)",
                                background: "rgba(255,255,255,0.05)",
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 14,
                                fontWeight: 500,
                                display: "flex",
                            }}
                        >
                            {lang}
                        </div>
                    ))}
                </div>

                {/* URL badge */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 32,
                        right: 40,
                        fontSize: 16,
                        color: "rgba(255,255,255,0.3)",
                        fontWeight: 500,
                        display: "flex",
                    }}
                >
                    shrew.ink
                </div>
            </div>
        ),
        { ...size }
    )
}
