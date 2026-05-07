import { Pressable, Text, View } from 'react-native';

import { copy23 } from '../generated/copy/copy23';
import { layout23 } from '../generated/layouts/layout23';
import { palette23 } from '../generated/palettes/palette23';

export function Screen23() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout23.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy23.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy23.detail} / {palette23.name}
			</Text>
		</View>
	);
}
