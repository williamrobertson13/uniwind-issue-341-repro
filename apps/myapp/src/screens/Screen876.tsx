import { Pressable, Text, View } from 'react-native';

import { copy876 } from '../generated/copy/copy876';
import { layout876 } from '../generated/layouts/layout876';
import { palette876 } from '../generated/palettes/palette876';

export function Screen876() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout876.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy876.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy876.detail} / {palette876.name}
			</Text>
		</View>
	);
}
