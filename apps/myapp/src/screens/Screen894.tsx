import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy894 } from '../generated/copy/copy894';
import { layout894 } from '../generated/layouts/layout894';
import { palette894 } from '../generated/palettes/palette894';

const RuntimeView894 = withUniwind(View);

export function Screen894() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView894 styleClassName={layout894.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy894.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy894.detail} / {palette894.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
