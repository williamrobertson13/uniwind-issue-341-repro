import { Pressable, Text, View } from 'react-native';

import { copy295 } from '../generated/copy/copy295';
import { layout295 } from '../generated/layouts/layout295';
import { palette295 } from '../generated/palettes/palette295';

export function Screen295() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout295.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy295.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy295.detail} / {palette295.name}
			</Text>
		</View>
	);
}
