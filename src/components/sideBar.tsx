import { Button, Stack, Box } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePersonSearch } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

export default function SideBar() {
  return (
    <Box>
      <Stack p="3" height="100vh" className="flex">
        <Stack gap="3" className="flex justify-start">
          <h1 className="text-[#04A51E] font-bold text-3xl text-left">circle</h1>
          <h3 className="text-md text-white">
            <a href="/" className="flex items-center gap-3">
              <AiOutlineHome style={{ color: "white", fontSize: "15px" }} /> Home
            </a>
          </h3>
          <h3 className="text-md text-white">
            <a href="/search" className="flex items-center gap-3">
              <MdOutlinePersonSearch style={{ color: "white", fontSize: "15px" }} /> Search
            </a>
          </h3>
          <h3 className="text-md text-white">
            <a href="/follow" className="flex items-center gap-3">
              <RiUserFollowLine style={{ color: "white", fontSize: "15px" }} /> Follow
            </a>
          </h3>
          <h3 className="text-md text-white">
            <a href="/profile" className="flex items-center gap-3">
              <CgProfile style={{ color: "white", fontSize: "15px" }} /> Profile
            </a>
          </h3>
          <Button
            type="submit"
            width="100%"
            height="35px"
            rounded="50px"
            bgColor="#04A51E"
            color="white"
          >
            Create Post
          </Button>
        </Stack>

        <Stack display="flex" className="flex justify-end">
          <h3 className="text-md text-white">
            <a href="#" className="flex items-center gap-3">
              <TbLogout2 style={{ color: "white", fontSize: "15px" }} /> Logout
            </a>
          </h3>
        </Stack>
      </Stack>
    </Box>
  );
}