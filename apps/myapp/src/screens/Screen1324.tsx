import { Pressable, Text, View } from 'react-native';

import { copy1324 } from '../generated/copy/copy1324';
import { layout1324 } from '../generated/layouts/layout1324';
import { palette1324 } from '../generated/palettes/palette1324';

export function Screen1324() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1324.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1324.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1324.detail} / {palette1324.name}
			</Text>
		</View>
	);
}
