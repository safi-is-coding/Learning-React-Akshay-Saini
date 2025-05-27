const Shimmer = () => {
    return (
        <>
            <div className="shimmer-container">
                {
                    Array.from({ length: 20 }).map((_, index) => (
                        <div className="shimmer-card" key={index}>Cards</div>
                    ))
                }
            </div>

            <style>{`
                .shimmer-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding: 1rem;
                    justify-content: center;
                }

                .shimmer-card {
                    width: 300px;
                    height: 250px;
                    background: #f6f7f8;
                    background-image: linear-gradient(
                        to right,
                        #f6f7f8 0%,
                        #edeef1 20%,
                        #f6f7f8 40%,
                        #f6f7f8 100%
                    );
                    background-repeat: no-repeat;
                    background-size: 800px 104px;
                    position: relative;
                    animation: shimmer 1.2s infinite linear;
                    border-radius: 8px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #aaa;
                    font-weight: bold;
                }

                @keyframes shimmer {
                    0% {
                        background-position: -800px 0;
                    }
                    100% {
                        background-position: 800px 0;
                    }
                }
            `}</style>
        </>
    );
};

export default Shimmer;
