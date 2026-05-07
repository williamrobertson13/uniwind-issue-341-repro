import { Pressable, Text, View } from 'react-native';

import { copy1108 } from '../generated/copy/copy1108';
import { layout1108 } from '../generated/layouts/layout1108';
import { palette1108 } from '../generated/palettes/palette1108';

export function Screen1108() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout1108.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1108.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1108.detail} / {palette1108.name}
			</Text>
		</View>
	);
}
