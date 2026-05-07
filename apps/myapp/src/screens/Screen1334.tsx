import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1334 } from '../generated/copy/copy1334';
import { layout1334 } from '../generated/layouts/layout1334';
import { palette1334 } from '../generated/palettes/palette1334';

const RuntimeView1334 = withUniwind(View);

export function Screen1334() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1334 styleClassName={layout1334.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1334.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1334.detail} / {palette1334.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
