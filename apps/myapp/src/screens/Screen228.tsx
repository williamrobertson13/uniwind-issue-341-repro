import { Pressable, Text, View } from 'react-native';

import { copy228 } from '../generated/copy/copy228';
import { layout228 } from '../generated/layouts/layout228';
import { palette228 } from '../generated/palettes/palette228';

export function Screen228() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout228.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy228.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy228.detail} / {palette228.name}
			</Text>
		</View>
	);
}
