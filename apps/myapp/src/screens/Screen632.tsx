import { Pressable, Text, View } from 'react-native';

import { copy632 } from '../generated/copy/copy632';
import { layout632 } from '../generated/layouts/layout632';
import { palette632 } from '../generated/palettes/palette632';

export function Screen632() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout632.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy632.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy632.detail} / {palette632.name}
			</Text>
		</View>
	);
}
