import { Pressable, Text, View } from 'react-native';

import { copy903 } from '../generated/copy/copy903';
import { layout903 } from '../generated/layouts/layout903';
import { palette903 } from '../generated/palettes/palette903';

export function Screen903() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout903.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy903.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy903.detail} / {palette903.name}
			</Text>
		</View>
	);
}
