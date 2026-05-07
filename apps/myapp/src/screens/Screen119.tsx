import { Pressable, Text, View } from 'react-native';

import { copy119 } from '../generated/copy/copy119';
import { layout119 } from '../generated/layouts/layout119';
import { palette119 } from '../generated/palettes/palette119';

export function Screen119() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout119.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy119.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy119.detail} / {palette119.name}
			</Text>
		</View>
	);
}
