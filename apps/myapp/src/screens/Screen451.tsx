import { Pressable, Text, View } from 'react-native';

import { copy451 } from '../generated/copy/copy451';
import { layout451 } from '../generated/layouts/layout451';
import { palette451 } from '../generated/palettes/palette451';

export function Screen451() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout451.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy451.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy451.detail} / {palette451.name}
			</Text>
		</View>
	);
}
