import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy214 } from '../generated/copy/copy214';
import { layout214 } from '../generated/layouts/layout214';
import { palette214 } from '../generated/palettes/palette214';

const RuntimeView214 = withUniwind(View);

export function Screen214() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView214 styleClassName={layout214.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy214.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy214.detail} / {palette214.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
