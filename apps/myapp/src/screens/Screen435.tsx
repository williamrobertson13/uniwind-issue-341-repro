import { Pressable, Text, View } from 'react-native';

import { copy435 } from '../generated/copy/copy435';
import { layout435 } from '../generated/layouts/layout435';
import { palette435 } from '../generated/palettes/palette435';

export function Screen435() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout435.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy435.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy435.detail} / {palette435.name}
			</Text>
		</View>
	);
}
