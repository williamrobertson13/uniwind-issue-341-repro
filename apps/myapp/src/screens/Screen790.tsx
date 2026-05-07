import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy790 } from '../generated/copy/copy790';
import { layout790 } from '../generated/layouts/layout790';
import { palette790 } from '../generated/palettes/palette790';

const RuntimeView790 = withUniwind(View);

export function Screen790() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView790 styleClassName={layout790.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy790.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy790.detail} / {palette790.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
