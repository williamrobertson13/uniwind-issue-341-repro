import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy222 } from '../generated/copy/copy222';
import { layout222 } from '../generated/layouts/layout222';
import { palette222 } from '../generated/palettes/palette222';

const RuntimeView222 = withUniwind(View);

export function Screen222() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView222 styleClassName={layout222.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy222.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy222.detail} / {palette222.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
