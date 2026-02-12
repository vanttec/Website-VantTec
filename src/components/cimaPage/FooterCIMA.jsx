import React from 'react';
// Import assets so Vite bundles them into dist during build
import fbIcon from '../../assets/icons/minimalistFB.png';
import xIcon from '../../assets/icons/minimalistX.png';
import igIcon from '../../assets/icons/minimalistIG.png';
import ghIcon from '../../assets/icons/minimalistGH.png';
import ytIcon from '../../assets/icons/minimalistYT.png';

const FooterCIMA = () => {
    return (
        <section>
            <div className='h-fit flex sm:flex-row flex-col text-[#6D6875] font-nunito'> {/* Apply text-white here */}
                <div className='sm:w-3/5 w-full flex flex-row p-8'>
                    <div className="w-1/2">
                        <p className='font-bold text-lg mt-4'>Address</p>
                        <dl className=''>
                            <dt>México, Nuevo León, Monterrey, Instituto Tecnológico de Estudios Superiores</dt>
                            <dd>Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64700</dd>
                        </dl>
                    </div>
                    <div className="w-1/2 flex sm:flex-row flex-col">
                        <div className="w-1/2 sm:mt-0 mt-4">
                            <p className='font-bold text-lg'>Navigation</p>
                            <div className='flex flex-col space-y-2'>
                                <a href='#about'>About</a>
                                <a href='#projects'>Projects</a>
                                <a href='#research'>Research</a>
                                <a href='#awards'>Awards</a>
                                <a href='#sponsors'>Sponsors</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-2/5 w-full p-8 text-[#6D6875] font-nunito'>
                    <p className='text-lg font-bold'>Social Media</p>
                    <div className='flex flex-wrap items-center gap-4 mt-4'>
                        <a href='https://www.facebook.com/VantTec' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                            <img src={fbIcon} alt="Facebook" className="w-12 h-12" />
                        </a>
                        <a href='https://twitter.com/vantTECmx' target='_blank' rel='noopener noreferrer' aria-label='X (Twitter)'>
                            <img src={xIcon} alt="X" className="w-12 h-12" />
                        </a>
                        <a href='https://www.instagram.com/vanttec/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                            <img src={igIcon} alt="Instagram" className="w-12 h-12" />
                        </a>
                        <a href="https://github.com/vanttec" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                            <img src={ghIcon} alt="Code" className="w-12 h-12" />
                        </a>
                        <a href="https://www.youtube.com/@vanttecmty" target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                            <img src={ytIcon} alt="YouTube" className="w-12 h-12" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterCIMA;
