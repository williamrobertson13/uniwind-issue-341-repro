import { Pressable, Text, View } from 'react-native';

import { copy324 } from '../generated/copy/copy324';
import { layout324 } from '../generated/layouts/layout324';
import { palette324 } from '../generated/palettes/palette324';

export function Screen324() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout324.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy324.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy324.detail} / {palette324.name}
			</Text>
		</View>
	);
}
