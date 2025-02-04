// Tools
import { styled } from "@mui/system";
import { destinationPictureURL } from "@/utils/client/imageURLs";
// Types
import type { MUIStyledCommonProps } from "@mui/system";
import type { FunctionComponent } from "react";
// Other components
import UnfadeOnScroll from "@/components/_utils/UnfadeOnScroll";
// Styled Components
import SkeletonImage from "@/components/_utils/styled/SkeletonImage";

const Wrapper = styled("div")(({ theme }) => ({
    height: "450px",
    position: "relative",
    borderRadius: "10px 50px 10px 50px",
    overflow: "hidden",
    width: "calc(60% - 20px)",
}));

interface BackgroundPictureProps extends MUIStyledCommonProps {
    folder: string;
    city: string;
    country: string;
    resolution: "360p" | "480p" | "720p" | "1080p";
}

const BackgroundPicture: FunctionComponent<BackgroundPictureProps> = (props) => {
    const { folder, resolution, city, country, ...propsToForward } = props;
    return (
        <Wrapper {...propsToForward} className="destination-picture">
            <UnfadeOnScroll fullSize>
                <SkeletonImage
                    layout="fill" //
                    alt={`${city}-thumbnail`}
                    src={destinationPictureURL(folder, resolution, "thumbnail")}
                    objectFit="cover"
                    modalMaxResolution="1080p"
                    advanceModalProperties={{
                        title: city,
                        sectionName: country,
                    }}
                ></SkeletonImage>
            </UnfadeOnScroll>
        </Wrapper>
    );
};

export default BackgroundPicture;
