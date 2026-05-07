import { Pressable, Text, View } from 'react-native';

import { copy1044 } from '../generated/copy/copy1044';
import { layout1044 } from '../generated/layouts/layout1044';
import { palette1044 } from '../generated/palettes/palette1044';

export function Screen1044() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout1044.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1044.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1044.detail} / {palette1044.name}
			</Text>
		</View>
	);
}
