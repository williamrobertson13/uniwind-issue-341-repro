import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy694 } from '../generated/copy/copy694';
import { layout694 } from '../generated/layouts/layout694';
import { palette694 } from '../generated/palettes/palette694';

const RuntimeView694 = withUniwind(View);

export function Screen694() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView694 styleClassName={layout694.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy694.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy694.detail} / {palette694.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
