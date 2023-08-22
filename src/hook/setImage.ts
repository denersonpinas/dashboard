import sun from '@/assets/images/sun.svg'
import sunTwo from '@/assets/images/sun-3.svg'
import cold from '@/assets/images/cold.svg'
import seco from '@/assets/images/seco.svg'
import umido from '@/assets/images/umido.svg'
import muitoUmido from '@/assets/images/muito-umido.svg'

import sunDesk from '@/assets/images/sun-desk.svg'
import frescoDesk from '@/assets/images/fresco-desk.svg'
import coldDesk from '@/assets/images/cold-desk.svg'

export const setImage = (state, valueTemp, valueUmidade, temperatura, tamanho = 'p'): string => {
    if (tamanho === 'p') {
        if (state === "temperatura") {
            if (temperatura === "celsius") {
                if (valueTemp <= 16) {
                    return cold
                } else if (valueTemp > 16 && valueTemp <= 28) {
                    return sunTwo
                }
                return sun
            } else {
                if (valueTemp <= 60) {
                    return cold
                } else if (valueTemp > 60 && valueTemp <= 82.4) {
                    return sunTwo
                }
                return sun
            }
        } else {
            if (valueUmidade <= 45) {
                return seco
            } else if (valueUmidade > 45 && valueUmidade <= 85) {
                return umido
            }
        }
        return muitoUmido;
    } else {
        if (temperatura === "celsius") {
            if (valueTemp <= 16) {
                return coldDesk
            } else if (valueTemp > 16 && valueTemp <= 28) {
                return frescoDesk
            }
            return sunDesk
        } else {
            if (valueTemp <= 60) {
                return coldDesk
            } else if (valueTemp > 60 && valueTemp <= 82.4) {
                return frescoDesk
            }
            return sunDesk
        }
    }
}