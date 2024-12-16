import { create } from "zustand"
import { persist } from "zustand/middleware"

export const Store = create(persist(
    (set) => ({
        accessToken: " ",
        refreshToken: " ",
        theme: "light",
        toggle: () => set((state) => ({
            ...state, theme: state.theme === "light" ? "dark" : "light"
        })),
        addAccessToken: (token) => set((prevState) => ({ ...prevState, accessToken: token })),
        addRefreshToken: (token) => set((prevState) => ({ ...prevState, refreshToken: token }))

    })
))

export default Store