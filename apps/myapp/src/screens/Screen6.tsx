import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy6 } from '../generated/copy/copy6';
import { layout6 } from '../generated/layouts/layout6';
import { palette6 } from '../generated/palettes/palette6';

const RuntimeView6 = withUniwind(View);

export function Screen6() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView6 styleClassName={layout6.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy6.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy6.detail} / {palette6.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
