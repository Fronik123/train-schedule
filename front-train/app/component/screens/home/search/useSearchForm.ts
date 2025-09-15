import { ISearchFromData } from "./search.interface";
import { useDebounce } from "@/hooks/useDebounce";
import { useForm } from "react-hook-form";
import { useMemo } from "react";

export const useSerachForm = () => {
  const { control, watch } = useForm<ISearchFromData>({
    mode: "onChange",
  });

  const searchTerm = watch("searchTerm");
  const debouncedSearch = useDebounce(searchTerm, 500);

  return useMemo(
    () => ({ debouncedSearch, searchTerm, control }),
    [searchTerm],
  );
};
