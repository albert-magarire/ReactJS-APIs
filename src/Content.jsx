import React from 'react';

const Content = ({ dogData, banList, onBanAttribute }) => {
    if (!dogData) return null;

    const { url, breed, size, temperament } = dogData;

    const shouldDisplay = !banList.includes(breed) && !banList.includes(size) && !banList.includes(temperament);

    const handleAttributeClick = (attribute) => {
        onBanAttribute(attribute);
    };

    return (
        <div className="content">
            {shouldDisplay && (
                <div>
                    <img src={url} className="dog-image" alt="Random Dog" />
                    <p>
                        Breed: <button onClick={() => handleAttributeClick(breed)}>{breed}  .</button>

                        Size: <button onClick={() => handleAttributeClick(size)}>{size}  .</button>

                        Temperament: <button onClick={() => handleAttributeClick(temperament)}>{temperament}  .</button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Content;
