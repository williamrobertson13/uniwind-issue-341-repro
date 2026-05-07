import { Pressable, Text, View } from 'react-native';

import { copy616 } from '../generated/copy/copy616';
import { layout616 } from '../generated/layouts/layout616';
import { palette616 } from '../generated/palettes/palette616';

export function Screen616() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout616.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500">{copy616.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy616.detail} / {palette616.name}
			</Text>
		</View>
	);
}
