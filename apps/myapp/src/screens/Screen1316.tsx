import { Pressable, Text, View } from 'react-native';

import { copy1316 } from '../generated/copy/copy1316';
import { layout1316 } from '../generated/layouts/layout1316';
import { palette1316 } from '../generated/palettes/palette1316';

export function Screen1316() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout1316.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1316.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1316.detail} / {palette1316.name}
			</Text>
		</View>
	);
}
