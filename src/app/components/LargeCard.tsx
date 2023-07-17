import React from 'react';
import Image from 'next/image';

interface LargeCardProps {
    banner?: string;
    images?: { image: string }[];
    text?: string;
    createdBy?: string;
}

const LargeCard: React.FC<LargeCardProps> = ({ banner, images, text, createdBy }) => {
    return (
        <div className="">
            <div className="w-full flex flex-col rounded-2xl overflow-hidden">
                {banner && (
                    <div className="flex justify-center">
                        <Image
                            className="mt-1 rounded-2xl w-full p-3 object-cover"
                            src={banner}
                            height={600}
                            width={300}
                            alt=""
                        />
                    </div>
                )}

                {images && images.length > 0 && (
                    <div className="p-2 mt-2 flex justify-center">
                        {images.map((image, index) => (
                            <div key={index} className="mapped-image">
                                <Image
                                    className="rounded-[20px] gap-4 p-1 w-full"
                                    src={image.image}
                                    height={600}
                                    width={600}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                )}

                {text && <div className="text-white mt-4 p-2">{text}</div>}

                {createdBy && (
                    <span className="text-white mt-2 p-2">Created by {createdBy}</span>
                )}
            </div>

            <style jsx>{`
              .w-full {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
              }

              .mapped-image {
                background: transparent;
                border: none;
              }

              @media (max-width: 768px) {
                .flex {
                  display: flex;
                  flex-wrap: wrap;
                }

                .w-full {
                  width: 100%;
                }

                .mapped-image {
                  width: 100%;
                }
              }

              @media (min-width: 768px) {
                .mapped-image {
                  width: 33%;
                }
              }
            `}</style>
        </div>
    );
};

export default LargeCard;
