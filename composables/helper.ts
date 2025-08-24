export const useAnimatedNumber = () => {
    const animateNumber = (
        targetValue: number,
        duration: number = 2000,
        increment: number = 1,
        onUpdate: (value: number) => void
    ) => {
        let current = 0
        const startTime = Date.now()
        const totalSteps = Math.ceil(targetValue / increment)
        const interval = Math.max(10, duration / totalSteps)

        const updateNumber = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            current = Math.min(Math.floor(progress * targetValue), targetValue)
            onUpdate(current)

            if (progress < 1) {
                setTimeout(updateNumber, interval)
            } else {
                onUpdate(targetValue)
            }
        }

        updateNumber()
    }

    return { animateNumber }
}