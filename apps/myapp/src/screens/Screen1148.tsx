import { Pressable, Text, View } from 'react-native';

import { copy1148 } from '../generated/copy/copy1148';
import { layout1148 } from '../generated/layouts/layout1148';
import { palette1148 } from '../generated/palettes/palette1148';

export function Screen1148() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1148.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy1148.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1148.detail} / {palette1148.name}
			</Text>
		</View>
	);
}
