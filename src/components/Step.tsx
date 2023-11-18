import React from 'react'
import style from '../styles/Step.module.css'
import { ArrowRight, CheckCircle, CircleDashed, Info } from '@phosphor-icons/react'

function Step() {
    return (
        <div className={style.main}>
            <div className={style.leftDiv}>
                <div>
                    {/* Icon (changes) */}
                    <CheckCircle size={'1.5rem'} weight="fill" className={style.completeIcon} />
                    {/* <CircleDashed size={'1.5rem'} className={style.pendingIcon} /> */}

                </div>


                <div className={style.textDiv}>

                    {/*  Title */}
                    <h4 className={style.title}>取引所 / ブロックチェーンを選択しましょう</h4>


                    {/* badge - optional */}
                    <div className={style.badgeDiv}>
                        <span className={style.badge}>13 取引所/ブロックチェーン選択済み</span>
                    </div>

                    {/* Description */}
                    <p className={style.description}>取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。</p>
                    {/* info text - optional */}
                    <div className={style.infoDiv}>
                        <Info size={'1rem'} className={style.infoIcon} />
                        <span className={style.infoText}>お客様はDeFi 取引が無い為、完了したものとして認識しました。</span>
                    </div>

                </div>
            </div>
            {/* Button */}
            <div className={style.rightDiv}>
                <button className={style.button}>
                    <span className={style.buttonText}>選択する</span>
                    <ArrowRight size={'1rem'} weight="bold" className={style.buttonIcon} />
                </button>
            </div>
        </div>
    )
}

export default Step