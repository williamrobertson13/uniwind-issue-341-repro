import { Pressable, Text, View } from 'react-native';

import { copy673 } from '../generated/copy/copy673';
import { layout673 } from '../generated/layouts/layout673';
import { palette673 } from '../generated/palettes/palette673';

export function Screen673() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout673.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy673.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy673.detail} / {palette673.name}
			</Text>
		</View>
	);
}
