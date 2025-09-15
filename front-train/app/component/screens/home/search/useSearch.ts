import { ScheduleService } from "@/services/schedule.service";
import { useQuery } from "@tanstack/react-query";
import { useSerachForm } from "./useSearchForm";

export const useSearch = () => {
  const { searchTerm, debouncedSearch, control } = useSerachForm();

  const { data: schedules, isLoading } = useQuery({
    queryKey: ["search schedules", debouncedSearch],
    queryFn: () => ScheduleService.getAll(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  return { schedules, isLoading, control, searchTerm };
};
