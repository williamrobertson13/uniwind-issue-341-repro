import { Pressable, Text, View } from 'react-native';

import { copy84 } from '../generated/copy/copy84';
import { layout84 } from '../generated/layouts/layout84';
import { palette84 } from '../generated/palettes/palette84';

export function Screen84() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout84.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy84.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy84.detail} / {palette84.name}
			</Text>
		</View>
	);
}
