import { Pressable, Text, View } from 'react-native';

import { copy379 } from '../generated/copy/copy379';
import { layout379 } from '../generated/layouts/layout379';
import { palette379 } from '../generated/palettes/palette379';

export function Screen379() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout379.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy379.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy379.detail} / {palette379.name}
			</Text>
		</View>
	);
}
