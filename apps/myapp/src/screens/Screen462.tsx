import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy462 } from '../generated/copy/copy462';
import { layout462 } from '../generated/layouts/layout462';
import { palette462 } from '../generated/palettes/palette462';

const RuntimeView462 = withUniwind(View);

export function Screen462() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView462 styleClassName={layout462.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy462.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy462.detail} / {palette462.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
