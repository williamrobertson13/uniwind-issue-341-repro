import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1062 } from '../generated/copy/copy1062';
import { layout1062 } from '../generated/layouts/layout1062';
import { palette1062 } from '../generated/palettes/palette1062';

const RuntimeView1062 = withUniwind(View);

export function Screen1062() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1062 styleClassName={layout1062.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1062.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1062.detail} / {palette1062.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
