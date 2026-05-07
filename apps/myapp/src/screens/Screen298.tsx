import { Pressable, Text, View } from 'react-native';

import { copy298 } from '../generated/copy/copy298';
import { layout298 } from '../generated/layouts/layout298';
import { palette298 } from '../generated/palettes/palette298';

export function Screen298() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout298.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy298.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy298.detail} / {palette298.name}
			</Text>
		</View>
	);
}
