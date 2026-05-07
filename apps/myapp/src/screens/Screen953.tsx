import { Pressable, Text, View } from 'react-native';

import { copy953 } from '../generated/copy/copy953';
import { layout953 } from '../generated/layouts/layout953';
import { palette953 } from '../generated/palettes/palette953';

export function Screen953() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<View className={layout953.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy953.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy953.detail} / {palette953.name}
			</Text>
		</View>
	);
}
